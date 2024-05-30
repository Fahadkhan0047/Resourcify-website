
import React from 'react';


import icon from '../../assets/companylogo/amzn.png';
import icon2 from '../../assets/companylogo/IBM.png'
import icon3 from '../../assets/companylogo/infosys.png'
import icon4 from '../../assets/companylogo/msft.png'
import icon5 from '../../assets/companylogo/tcs.png'

const apps = [
  { name: 'Amazon', image: icon, description: 'Sofware Development Engineer | SDE-I',salary:'15'},
  { name: 'IBM', image: icon2, description: 'Lorem ipsum dolor sit amet, consectes.', salary:'5'},
  { name: 'Infosys', image: icon3, description: 'Lorem ipsum dolor sit amet.',salary:'3.5' },
  { name: 'Microsoft', image: icon4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',salary:'20' },
  { name: 'Tata Consultancy Services', image: icon5, description: 'Lorem ipsum dolor sit amet.',salary:'6' },
];

const ConnectApps = () => {
  return (
    <div className="p-8">
      <div className="mb-4">
        <p className="text-gray-600 pb-8 ml-2">Get the latest jobs and internship listing here.</p>
      </div>
      <div className="bg-white shadow-md rounded-md">
        {apps.map((app, index) => (
          <div key={index} className="flex items-center justify-between p-4 border-b last:border-b-0">
            <div className="flex items-center">
              <img src={app.image} className="h-12 w-12 object-contain mr-4 text-2xl bg-white"></img>
              <div>
                <h3 className="text-lg font-medium">{app.name}</h3>
                <p className="text-sm text-gray-500">{app.description}</p>
                <p className="text-sm text-gray-500">Salary: {app.salary}LPA</p>
              </div>
            </div>
            <div className="flex items-center">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#10B981] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >Apply Now</button>
              <label className="inline-flex items-center cursor-pointer">
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectApps;
