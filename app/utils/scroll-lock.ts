'use client';
import React from 'react';
export const useScrollLock = () => {
  const lockScroll = React.useCallback(() => {
    try {
      document.body.dataset.scrollLock = 'true';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-compensation)';
    } catch {
      null;
    }
  }, []);

  const unlockScroll = React.useCallback(() => {
    try {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      delete document.body.dataset.scrollLock;
    } catch {
      null;
    }
  }, []);
  return {
    lockScroll,
    unlockScroll,
  };
};
