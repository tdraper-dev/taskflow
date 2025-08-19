import { cn } from "@/lib/utils"

export function ClientAction() {
  return (
    <div
      className={cn(
        "relative rounded-lg p-6",
        "bg-[#181326] text-[#fdfcff]",
        "border border-[#332c49]"
      )}
    >
      {/* Card Content */}
      <div className="flex flex-col gap-2">
        {/* Title + Status + Date */}
        <div className="flex items-center gap-2">
          {/* Title */}
          <div className="flex items-center gap-2.5">
            <h3 className="text-base font-semibold text-[#fdfcff] leading-[1.4]">
              Client Action
            </h3>
          </div>
          
          {/* Status Badge */}
          <div className="flex items-center gap-2.5">
            <div className="bg-[#5182ef] rounded-full px-1.5 py-0 h-4 flex items-center">
              <span className="text-[10px] font-semibold text-[#fdebe9] uppercase leading-[1.4]">
                Updated
              </span>
            </div>
          </div>
          
          {/* Date */}
          <div className="flex items-center gap-2.5">
            <span className="text-sm text-[#9a97a5] leading-[1.4]">
              December 12, 2024
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-base text-[#9a97a5] leading-[1.4]">
          <p className="mb-3">
            It&apos;s strongly recommend to perform the following mitigation steps until a new patch is released:
          </p>
          
          <ol className="list-decimal ml-6 mb-3 space-y-1">
            <li>Restrict external access to affected systems.</li>
            <li>Disable the autorun directory feature within the application.</li>
          </ol>
          
          <p>
            Huntress has provided indicators of compromise as well as detection rules in their article:{" "}
            <a
              href="https://www.huntress.com/blog/threat-advisory-oh-no-cleo-cleo-software-actively-being-exploited-in-the-wild"
              className="underline hover:text-[#fdfcff] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.huntress.com/blog/threat-advisory-oh-no-cleo-cleo-software-actively-being-exploited-in-the-wild
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}