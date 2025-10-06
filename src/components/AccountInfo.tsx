import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import './AccountInfo.css';

const AccountInfo = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const accounts = [
    {
      role: '신랑',
      name: '홍길동',
      bank: '국민은행',
      account: '123-456789-01-234'
    },
    {
      role: '신부',
      name: '김영희',
      bank: '신한은행',
      account: '110-123-456789'
    }
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const copyToClipboard = (account: string, name: string) => {
    navigator.clipboard.writeText(account).then(() => {
      setCopiedAccount(name);
      setTimeout(() => setCopiedAccount(null), 2000);
    });
  };

  return (
    <section className="account-info section">
      <motion.h2 className="section-title" {...fadeInUp}>
        마음 전하실 곳
      </motion.h2>

      <motion.p 
        className="account-description"
        {...fadeInUp}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        참석이 어려우신 분들을 위해<br />
        계좌번호를 안내드립니다
      </motion.p>

      <div className="account-container">
        {accounts.map((acc, index) => (
          <motion.div
            key={index}
            className="account-card"
            {...fadeInUp}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <div className="account-header">
              <span className="account-role">{acc.role}측</span>
              <h3>{acc.name}</h3>
            </div>
            
            <div className="account-details">
              <p className="bank-name">{acc.bank}</p>
              <div className="account-number-row">
                <p className="account-number">{acc.account}</p>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(acc.account, acc.name)}
                >
                  {copiedAccount === acc.name ? (
                    <>
                      <FaCheck /> 복사됨
                    </>
                  ) : (
                    <>
                      <FaCopy /> 복사
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="account-notice"
        {...fadeInUp}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>💝 축하의 마음을 소중히 간직하겠습니다</p>
      </motion.div>
    </section>
  );
};

export default AccountInfo;

