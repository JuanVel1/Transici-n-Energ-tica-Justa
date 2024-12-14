import { Wind, Leaf, DollarSign } from 'lucide-react';

export function WindOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Wind Energy: Powering a Sustainable Future
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md">
            <Wind className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">How It Works</h3>
            <p className="text-gray-600">
              Wind turbines convert the kinetic energy from wind into electricity, 
              providing clean, renewable energy directly from the wind.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
            <Leaf className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Environmental Benefits</h3>
            <p className="text-gray-600">
              Wind energy reduces greenhouse gas emissions and reliance on fossil fuels, 
              contributing to a healthier planet.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <DollarSign className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Economic Impact</h3>
            <p className="text-gray-600">
              Investing in wind energy creates jobs and stimulates economic growth, 
              while providing a cost-effective source of power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}