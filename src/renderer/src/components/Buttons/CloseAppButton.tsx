// CloseButton.tsx

export const CloseAppButton = () => {
  const handleCloseClick = () => {
    window.api.send('close-app');
  };

  return (
    <button onClick={handleCloseClick} className="text-white"> x </button>
  );
};

