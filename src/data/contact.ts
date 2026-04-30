import { FiBookOpen, FiGithub, FiMail } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export interface ContactItem {
  title: string;
  description: string;
  href: string;
  ariaLabel: string;
  icon: IconType;
}

export const contacts: ContactItem[] = [
  {
    title: 'GitHub',
    description: '팀 / 개인 프로젝트를 정리한 저장소입니다.',
    href: 'https://github.com/Kimkaaa',
    ariaLabel: 'GitHub 저장소로 이동',
    icon: FiGithub,
  },
  {
    title: 'Blog',
    description: '프로젝트 경험과 기술 학습을 정리한 블로그입니다.',
    href: 'https://velog.io/@kimkaaa',
    ariaLabel: 'Blog로 이동',
    icon: FiBookOpen,
  },
  {
    title: 'Mail',
    description: 'kimkaaa.dev@gmail.com',
    href: 'mailto:kimkaaa.dev@gmail.com',
    ariaLabel: '메일 보내기',
    icon: FiMail,
  },
];