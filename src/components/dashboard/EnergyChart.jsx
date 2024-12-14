import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function EnergyChart({ data, title, color }) {
  // Use the color palette strategically
  const paletteColors = {
    '#007BFF': '#007BFF',   // Azul Brillante
    '#003B73': '#003B73',   // Azul Oscuro
    '#FFC107': '#FFC107',   // Amarillo Solar
    '#E6F7E6': '#E6F7E6',   // Verde Suave
  };

  const selectedColor = paletteColors[color] || color || '#007BFF';

  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-lg border border-blue-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6F2FA" />
            <XAxis 
              dataKey="year" 
              axisLine={{ stroke: '#6C757D' }}
              tickLine={{ stroke: '#6C757D' }}
              tick={{ fill: '#343A40' }}
            />
            <YAxis 
              axisLine={{ stroke: '#6C757D' }}
              tickLine={{ stroke: '#6C757D' }}
              tick={{ fill: '#343A40' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderColor: '#003B73',
                borderRadius: '8px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={selectedColor} 
              fill={selectedColor} 
              fillOpacity={0.2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}