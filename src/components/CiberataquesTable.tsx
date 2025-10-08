import data from '../data/ciberataquesColombia.json';

const CiberataquesTable = () => {
  const ataques = data.ciberataques_colombia_pymes;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th>Año</th>
            <th>Ataques</th>
            <th>Tipos comunes</th>
            <th>Sectores afectados</th>
            <th>Consecuencias</th>
            <th>% Empresas afectadas</th>
            <th>Medidas</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(ataques).map(([year, info]) => (
            <tr key={year} className="border-t">
              <td>{year}</td>
              <td>{info.numero_estimado_ataques}</td>
              <td>{info.tipos_ataque_mas_comunes.join(', ')}</td>
              <td>{info.sectores_mas_afectados.join(', ')}</td>
              <td>{info.consecuencias_principales.join(', ')}</td>
              <td>{info.porcentaje_empresas_afectadas}</td>
              <td>{info.medidas_mitigacion_adoptadas.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CiberataquesTable;
