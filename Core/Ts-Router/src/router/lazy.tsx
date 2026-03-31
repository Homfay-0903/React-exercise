import React, { Suspense } from 'react';
import { Skeleton } from 'antd';

//type LazyComponent = React.LazyExoticComponent<React.ComponentType>;

export const lazyLoad = (importFn: () => Promise<{ default: React.ComponentType }>): React.ComponentType => {
  const LazyComponent = React.lazy(importFn)

  return () => (
    <Suspense fallback={<Skeleton active />}>
      <LazyComponent />
    </Suspense>
  )
}