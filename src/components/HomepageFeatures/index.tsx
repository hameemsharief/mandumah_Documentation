import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'بحث سهل وسريع',
    description: (
      <>
        ابحث عن أي موضوع باستخدام الكلمات الدالة من خلال البحث البسيط أو
        استخدم البحث المتقدم للتحكم الدقيق في نتائج بحثك.
      </>
    ),
  },
  {
    title: 'نتائج دقيقة',
    description: (
      <>
        رتب النتائج وصفلها حسب احتياجك. استخدم الفلاتر المتنوعة
        لتضييق نطاق البحث والوصول إلى ما تريد بدقة.
      </>
    ),
  },
  {
    title: 'خدمات متكاملة',
    description: (
      <>
        استخدم سلة النتائج لجمع المواد، وصدر البيانات الببليوجرافية،
        واستخدم الاستشهاد المرجعي بتنسيقات APA، MLA وغيرها.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
