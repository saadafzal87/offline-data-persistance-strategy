const OfflineBanner = () => {
  return (
    <div className="flex flex-col items-start bg-rose-600 text-white p-4 text-center rounded-lg drop-shadow-lg animate-pulse fixed bottom-2 right-2 z-50">
      <span className="font-bold text-md">Wooops!! You are offline.</span>
      <span className="text-sm font-light">Some features may not work properly.</span>
    </div>
  );
};

export default OfflineBanner;
