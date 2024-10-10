import { useNavigate } from 'react-router-dom';
import SubjectsData from "../constant";

export function Subjects() {
  const navigate = useNavigate();

  const handleNavigation = (subject) => {
    if (subject === 'english') {
      navigate('/english');
    } else if (subject === 'react') {
      navigate('/react');
    }
  };

  return (
    <div className="p-4 space-y-6">
      {Object.keys(SubjectsData).map(subject => (
        <div 
        key={`${subject}-${SubjectsData.id}`} 
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer" 
          onClick={() => handleNavigation(subject)}
        >
          <h2 className="text-xl font-bold text-gray-800">
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </h2>
          {SubjectsData[subject].map((item, index) => (
            <div key={`${subject}-${item.name}`} className="mt-2">
              <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
