export default function ClientAction() {
  return (
    <div
      className="bg-[#181326] relative rounded-lg size-full"
      data-name="Client Action"
      id="node-12_115"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-6 pt-4 px-6 relative size-full">
        <div
          className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
          data-name="Card Content"
          id="node-12_116"
        >
          <div
            className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
            data-name="Title + D:T"
            id="node-12_117"
          >
            <div
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
              data-name="Title"
              id="node-12_118"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fdfcff] text-[16px] text-left text-nowrap"
                id="node-12_119"
              >
                <p className="block leading-[1.4] whitespace-pre">
                  Client Action
                </p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
              data-name="Status"
              id="node-12_120"
            >
              <div
                className="bg-[#5182ef] box-border content-stretch flex flex-row h-4 items-center justify-start px-1.5 py-0 relative rounded-[999px] shrink-0"
                data-name="generic-pill"
                id="node-12_121"
              >
                <div
                  className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
                  data-name="Form.Label"
                  id="node-I12_121-400_2500"
                >
                  <div
                    className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fdebe9] text-[10px] text-center text-nowrap uppercase"
                    id="node-I12_121-400_2501"
                  >
                    <p className="block leading-[1.4] whitespace-pre">
                      Updated
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
              data-name="D:T"
              id="node-12_122"
            >
              <div
                className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9a97a5] text-[14px] text-left text-nowrap"
                id="node-12_123"
              >
                <p className="block leading-[1.4] whitespace-pre">
                  December 12, 2024
                </p>
              </div>
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0"
            data-name="Copy"
            id="node-12_124"
          >
            <div
              className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9a97a5] text-[0px] text-left text-nowrap"
              id="node-12_125"
            >
              <p className="block leading-[1.4] mb-[11px] text-[16px] whitespace-pre">{`It's strongly recommend to perform the following mitigation steps until a new patch is released:`}</p>
              <ol className="list-decimal mb-[11px]" start="1">
                <li
                  className="mb-0"
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[1.4] text-[16px]">
                    Restrict external access to affected systems.
                  </span>
                </li>
                <li
                  className=""
                  style={{
                    marginInlineStart:
                      "calc(1.5 * 1 * var(--list-marker-font-size, 0))",
                  }}
                >
                  <span className="leading-[1.4] text-[16px]">
                    Disable the autorun directory feature within the
                    application.
                  </span>
                </li>
              </ol>
              <p className="leading-[1.4] text-[16px] whitespace-pre">
                <span className="">
                  Huntress has provided indicators of compromise as well as
                  detection rules in their article:
                  <br aria-hidden="true" className="" />
                </span>
                <a
                  className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pointer font-['Inter:Regular',_sans-serif] font-normal not-italic"
                  href="https://www.huntress.com/blog/threat-advisory-oh-no-cleo-cleo-software-actively-being-exploited-in-the-wild"
                >
                  <span
                    className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] leading-[1.4] text-[16px]"
                    href="https://www.huntress.com/blog/threat-advisory-oh-no-cleo-cleo-software-actively-being-exploited-in-the-wild"
                  >
                    https://www.huntress.com/blog/threat-advisory-oh-no-cleo-cleo-software-actively-being-exploited-in-the-wild
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#332c49] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}