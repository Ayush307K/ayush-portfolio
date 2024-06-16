import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomComponent({ icon, title }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <h2>{title}</h2>
    </div>
  );
}
export default CustomComponent;