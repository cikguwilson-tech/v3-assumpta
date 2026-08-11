export type DrawerType = 'liturgy' | 'hymns' | 'readings' | 'booklet' | null;

export interface LiturgyItem {
  id: string;
  tag: string;
  title: string;
  citation: string;
  content: string;
  latinAntiphon?: string;
  category: 'antiphon' | 'reading' | 'psalm' | 'gospel' | 'prayer';
}

export interface HymnItem {
  id: string;
  title: string;
  subtitle: string;
  tune: string;
  stanzas: string[];
  refrain?: string;
}

export interface ReflectionItem {
  id: string;
  date: string;
  title: string;
  readTime: string;
  tag: string;
  summary: string;
  fullText: string[];
  author?: string;
}

export interface BookletItem {
  id: string;
  type: 'liturgy' | 'hymn' | 'reading';
  title: string;
  citationOrSubtitle: string;
  tag?: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  iconType?: 'check' | 'bell';
}
