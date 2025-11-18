import { IService } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ServiceCard: React.FC<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:shadow-xl ${theme === "dark"
      ? "bg-gradient-to-br from-dark-200 to-lightBlack hover:from-dark-200 hover:to-dark-200 border border-gray-700"
      : "bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white border border-gray-200"
      }`}>
      <div className="flex flex-col items-start space-y-4">
        <div className={`p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 ${theme === "dark"
          ? "bg-gradient-to-br from-green/20 to-blue-500/20"
          : "bg-gradient-to-br from-blue-100 to-green-100"
          }`}>
          <Icon className={`w-8 h-8 ${theme === "dark" ? "text-green" : "text-blue-600"
            }`} />
        </div>
        <div className="flex-1">
          <h5 className={`text-lg font-bold mb-2 transition-colors ${theme === "dark" ? "text-white" : "text-gray-800"
            }`}>
            {title}
          </h5>
          <p
            className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-green transition-all duration-300 group-hover:w-full rounded-b-xl`}></div>
    </div>
  );
};

export default ServiceCard;
