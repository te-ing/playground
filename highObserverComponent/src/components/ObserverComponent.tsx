/* eslint-disable jsx-a11y/no-static-element-interactions */

/** @description ObserverComponent로 만들어주는 최상위 함수
 *  @description P 제네릭은 Props를 의미한다.
 *  @question: 여기서 JSX.IntrinsicAttributes를 쓰는 것이 맞나? 다른 방식은 없는지? */
export default function ObserverComponent<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
  handleEvent: (event: { [key: string]: string } | string) => void
) {
  function Observer(props: P) {
    return (
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          const target = ((e.target as HTMLElement)?.closest("[data-click-log]") as HTMLElement) || null;
          if (!target) return;
          handleEvent(extractParams({ el: target, paramTarget: "data-click-log", paramLabel: "data-click-param" }));
        }}
      >
        <Component {...props} />
      </div>
    );
  }
  return Observer;
}

interface ExtractParams {
  el: HTMLElement;
  paramTarget: string;
  paramLabel: string;
  depth?: number;
}

/** @description i번째의 부모 엘리먼트까지 paramTarget 있는지 체크한 뒤 paramLabel으로 구별하여 객체를 반환한다. */
const extractParams = ({ el, paramTarget, paramLabel, depth }: ExtractParams): { [key: string]: string } => {
  if (!el) return {};
  let paramEl = el;
  const params = {};
  const param = `[${paramTarget}]`;
  for (let i = 0; i < (depth || 3); i++) {
    const paramsEl = paramEl.closest(param);
    if (!paramEl || !paramEl?.parentElement) break;
    const targetAttribute = paramsEl?.getAttribute(paramTarget);
    const labelAttribute = paramsEl?.getAttribute(paramLabel);
    if (!targetAttribute || !labelAttribute) break;
    Object.assign(params, { [labelAttribute]: targetAttribute });
    paramEl = paramsEl?.parentElement!;
  }
  return params;
};
