export default function DownloadCVButton() {
  return (
    <a
      href="/compressed.pdf"
      download="compressed.pdf"
      className="inline-block text-sm px-6 py-3 rounded-lg text-white 
                 bg-gradient-to-r from-purple-500 to-cyan-500 
                 hover:shadow-lg hover:shadow-purple-500/50 
                 transition"
    >
      Resume
    </a>
  );
}
