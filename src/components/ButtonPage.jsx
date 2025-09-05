export default function DownloadCVButton() {
  return (
    <a
      href="/images/compressed.pdf"
      download="/images/compressed.pdf"
      className="inline-block text-sm px-6 py-3 rounded-lg text-white 
                  
                 hover:shadow-lg hover:shadow-cyan-400/20
               
                 transition"
    >
      Resume
    </a>
  );
}
