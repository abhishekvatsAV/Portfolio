import { IService } from "../types";

const ServiceCard: React.FC<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="service-card">
      <div>
        <div className="icon-box">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3>
            {title}
          </h3>
          <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
