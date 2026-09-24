// Native <details> accordion: answers stay in the HTML (crawlable, works
// without JS) and open with an animated height where the browser supports it.
export default function FaqAccordion({ items }) {
  return (
    <div className="space-y-3" data-stagger="70">
      {items.map((item, index) => (
        <details
          key={index}
          data-reveal="up"
          className="faq-item group rounded-xl border border-[#e8dfc8] bg-white transition-colors duration-300 open:border-[#DCA54A]/60 open:bg-[#FFFCF5] hover:border-[#DCA54A]/50"
          open={index === 0}
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
            <h3 className="font-semibold text-gray-800 text-base">{item.question}</h3>
            <span
              aria-hidden="true"
              className="faq-icon flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#DCA54A]/50 text-[#C49A2B] transition-all duration-500 group-open:rotate-45 group-open:bg-[#DCA54A] group-open:text-white"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
