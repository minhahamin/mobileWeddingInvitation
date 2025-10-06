# 🎵 배경음악 설정 가이드

## 방법 1: YouTube Music 링크 사용 (간편!)

`src/components/BackgroundMusic.tsx` 파일에서 **video ID**를 수정:

### 1단계: YouTube 링크에서 Video ID 추출

YouTube Music 링크 예시:
```
https://music.youtube.com/watch?v=Emq17wn71jA&si=zJLNzwekO50sQtTA
```

**Video ID는**: `Emq17wn71jA` (watch?v= 뒤의 부분)

### 2단계: 코드에 적용

`src/components/BackgroundMusic.tsx` 파일의 24번째 줄:
```typescript
const YOUTUBE_VIDEO_ID = 'Emq17wn71jA'; // 여기에 video ID 입력
```

**장점:**
- ✅ 파일 업로드 불필요
- ✅ YouTube에 있는 모든 음악 사용 가능
- ✅ 무료

**단점:**
- ⚠️ 인터넷 연결 필요
- ⚠️ 모바일에서 자동재생 제한 (버튼 클릭 필요)

---

## 방법 2: 직접 MP3 링크 사용

`src/components/BackgroundMusic.tsx` 파일의 17번째 줄을 수정:

```typescript
const musicSource = '여기에_MP3_직접_링크_입력';
```

### MP3 직접 링크를 얻는 방법:

#### 1. **Google Drive 사용**
1. Google Drive에 MP3 파일 업로드
2. 파일 우클릭 → "공유" → "링크가 있는 모든 사용자"로 설정
3. 공유 링크 복사: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. 다음 형식으로 변환:
   ```
   https://drive.google.com/uc?export=download&id=FILE_ID
   ```

#### 2. **Dropbox 사용**
1. Dropbox에 MP3 파일 업로드
2. 공유 링크 생성
3. 링크 끝의 `?dl=0`를 `?dl=1`로 변경

#### 3. **GitHub 사용**
1. GitHub repository에 MP3 파일 업로드
2. 파일을 클릭하고 "Download" 버튼 우클릭 → "링크 주소 복사"
3. 해당 URL 사용

#### 4. **무료 음악 사이트**
- [Pixabay Music](https://pixabay.com/music/) - 무료 음악
- [Free Music Archive](https://freemusicarchive.org/)
- [Incompetech](https://incompetech.com/music/royalty-free/music.html)

다운로드 후 위의 Google Drive나 Dropbox에 업로드하여 사용

---

## 방법 2: 로컬 파일 사용

1. `public/music` 폴더에 `wedding-music.mp3` 파일 추가
2. `src/components/BackgroundMusic.tsx` 파일 수정:

```typescript
const musicSource = '/music/wedding-music.mp3';
```

---

## 방법 3: YouTube 음악 사용 (iframe 방식)

⚠️ **주의**: YouTube는 백그라운드 재생 제약이 있어 완벽하지 않습니다.

대신 **YouTube에서 음악을 다운로드**하여 위의 방법으로 사용하는 것을 추천합니다:

1. [YouTube to MP3 변환 사이트](https://ytmp3.nu/) 사용 (저작권 주의!)
2. MP3 파일 다운로드
3. Google Drive나 Dropbox에 업로드
4. 직접 링크 사용

---

## 추천 무료 웨딩 음악

### 클래식
- Canon in D (Pachelbel)
- Air on the G String (Bach)
- Ave Maria (Schubert)

### 현대음악
- A Thousand Years - Christina Perri
- All of Me - John Legend
- Perfect - Ed Sheeran

**저작권 주의!** 반드시 저작권이 없거나 라이선스가 허용된 음악을 사용하세요.

---

## 예시 코드

### Google Drive 링크 사용:
```typescript
const musicSource = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
```

### Dropbox 링크 사용:
```typescript
const musicSource = 'https://www.dropbox.com/s/YOUR_FILE_ID/music.mp3?dl=1';
```

### 로컬 파일 사용:
```typescript
const musicSource = '/music/wedding-music.mp3';
```

