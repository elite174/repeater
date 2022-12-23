export const delay = async <T>(func: () => T, timeout = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(func()), timeout);
  });
};
