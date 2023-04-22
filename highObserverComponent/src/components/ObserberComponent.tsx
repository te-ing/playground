/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ComponentType } from "react";

interface ObserverArgs {
  event: string;
  payload: { [key: string]: string };
}

// ObserberComponent로 만들어주는 최상위 함수
export default function ObserberComponent<P>(Component: ComponentType<P & ObserverArgs>) {
  const handler = (arg: ObserverArgs) => console.log("handler: ", arg.event, arg.payload);
  function Observer(args: P & ObserverArgs) {
    return (
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          // const target = ((e.target as HTMLElement)?.closest("[data-click]") as HTMLElement) || null;
          const target = e.target as HTMLElement;
          console.log("target", target);
          if (!target) return;
          const event = target?.getAttribute("data-click") || "";
          const payload = extractParams(target);
          // console.log("extractParams", extractParams(target));
          handler({ event, payload });
        }}
      >
        <Component {...args} />
      </div>
    );
  }
  return Observer;
}

export const extractParams = (el: HTMLElement): { [key: string]: string } => {
  if (!el) return {};
  let paramEl = el;
  const params = {};
  let dataParams;
  // console.log("***params***", paramEl.closest("[data-click-param]")?.getAttribute("data-click-log"));
  // console.log("***el***", paramEl);
  for (let i = 0; i < 1; i++) {
    const paramsEl = paramEl.closest("[data-click-param]");
    if (!paramEl || !paramEl?.parentElement) break;
    // params[dataParams] = paramsEl?.getAttribute("data-click-param");
    // Object.assign(params, JSON.parse(dataParams ?? "{}"));
    paramEl = paramsEl?.parentElement!;
  }
  return params;
};
