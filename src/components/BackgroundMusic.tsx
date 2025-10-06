import { useState, useEffect, useRef } from 'react';
import { FaMusic, FaPlay } from 'react-icons/fa';
import './BackgroundMusic.css';

// YouTube 타입 선언
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
  unMute: () => void;
  mute: () => void;
}

interface YTEvent {
  target: YTPlayer;
  data: number;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (id: string, config: unknown) => YTPlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
      };
    };
  }
}

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<YTPlayer | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // ============================================
  // YouTube 링크 설정 (여기를 수정하세요!)
  // ============================================
  // YouTube Music 링크에서 video ID만 추출하세요
  // 예: https://music.youtube.com/watch?v=Emq17wn71jA
  // -> videoId는 'Emq17wn71jA'
  
  const YOUTUBE_VIDEO_ID = 'Emq17wn71jA'; // 여기에 video ID 입력
  
  // ============================================

  useEffect(() => {
    // YouTube iframe API 스크립트 로드
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // API 준비되면 플레이어 생성
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1, // 1 = 자동재생, 0 = 수동재생
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID, // loop를 위해 필요
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          mute: 1, // 자동재생을 위해 초기에 음소거 (중요!)
        },
        events: {
          onReady: (event: YTEvent) => {
            setPlayer(event.target);
            
            // 사용자가 페이지와 상호작용하면 자동으로 음소거 해제
            const unmuteOnInteraction = () => {
              event.target.unMute();
              setIsPlaying(true);
              // 한 번만 실행되도록 이벤트 제거
              document.removeEventListener('click', unmuteOnInteraction);
              document.removeEventListener('scroll', unmuteOnInteraction);
              document.removeEventListener('touchstart', unmuteOnInteraction);
            };
            
            // 클릭, 스크롤, 터치 시 음소거 해제
            document.addEventListener('click', unmuteOnInteraction);
            document.addEventListener('scroll', unmuteOnInteraction);
            document.addEventListener('touchstart', unmuteOnInteraction);
          },
          onStateChange: (event: YTEvent) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    };
  }, []);

  const toggleMusic = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.unMute(); // 음소거 해제 (사용자가 클릭했을 때)
        player.playVideo();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* YouTube iframe (숨김) */}
      <div id="youtube-player" ref={playerRef} style={{ display: 'none' }}></div>

      <div className="music-control">
        <button 
          className={`music-button ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
          aria-label={isPlaying ? '음악 일시정지' : '음악 재생'}
        >
          <div className="music-icon-wrapper">
            {isPlaying ? (
              <>
                <FaMusic className="music-icon" />
                <div className="music-waves">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </>
            ) : (
              <FaPlay className="music-icon" />
            )}
          </div>
        </button>
        <p className="music-label">
          {isPlaying ? '음악 재생 중' : '음악 재생'}
        </p>
      </div>
    </>
  );
};

export default BackgroundMusic;
