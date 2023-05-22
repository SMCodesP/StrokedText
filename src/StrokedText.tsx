import { createRef, useEffect } from 'react';
import useDimensions from 'react-cool-dimensions';

type Props = {
  style?: React.CSSProperties;
  children?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  paintOrder?: string;
  textStyle?: React.CSSProperties;
  textClassName?: string;
  className?: string;
};

export function StrokedText(props: Props) {
  const svgRef = createRef<SVGSVGElement>();
  const { observe, width } = useDimensions();

  function updateSVG() {
    if (svgRef.current) {
      const bbox = svgRef.current.getBBox();

      svgRef.current.setAttribute(
        'viewBox',
        `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
      );
      svgRef.current.setAttribute('width', bbox.width + '');
      svgRef.current.setAttribute('height', bbox.height + '');
    }
  }

  useEffect(() => {
    updateSVG();
  }, [width]);

  useEffect(() => {
    updateSVG();
  }, []);

  return (
    <svg
      style={{
        overflow: 'visible',
        ...props.style,
      }}
      ref={svgRef}
      className={props.className ?? ''}
    >
      <text
        ref={observe as any}
        className={props.textClassName ?? ''}
        style={{
          stroke: props.stroke ?? 'black',
          fill: props.fill ?? 'white',
          paintOrder: props.paintOrder ?? 'stroke fill markers',
          strokeWidth: props.strokeWidth ?? 2,
          ...props.textStyle,
        }}
      >
        {props.children}
      </text>
    </svg>
  );;
}
