import { h } from 'preact';

function SvgComponent(props) {
  return (
    <svg width={80} height={80} viewBox="0 0 500 500" fill="none" {...props}>
      <path
        d="M375 250v125L250 250v250h250V0H250v125l125 125zM250 0H0v500h125V250h125L125 125 250 0z"
        fill="#CA3939"
      />
    </svg>
  );
}

export default SvgComponent;
