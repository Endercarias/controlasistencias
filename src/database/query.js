module.exports = {
    querys: {
        getAllEmploye: "select * from Empleado",
        getallJornada: "select * from Jornada",
        getallAreaTrabajo: "select * from AreaTrabajo",
        getallTrabajo: `select 
        t.uuid,
        t.descripcion as trabajodescripcion,
        e.primerNombre,
        e.segundoNombre,
        e.primerApellido,
        e.segundoApellido,
        a.descripcion as areaDescripcion
      from dbo.Trabajo t
      inner join dbo.empleado e on e.uuid = t.uuidEmpleado
      inner join dbo.AreaTrabajo a on a.uuid = t.[uuidAreaTrabajo]`,
        getallActividades: `select 
        ac.uuid,
        t.descripcion,
        e.primerNombre,
        e.segundoNombre,
        e.primerApellido,
        e.segundoApellido,
        a.descripcion as areaDescripcion,
        ac.descripcion as actividadescription,
        ac.precio
      from dbo.Actividades ac
      inner join dbo.Trabajo t on t.uuid = ac.uuidTrabajo
      inner join dbo.empleado e on e.uuid = t.uuidEmpleado
      inner join dbo.AreaTrabajo a on a.uuid = t.uuidAreaTrabajo`,
      getAllControlHorario: `SELECT 
      c.uuid,
      c.fechamovimiento,
      c.tipomovimiento,
      e.primerNombre,
        e.segundoNombre,
        e.primerApellido,
        e.segundoApellido,
        j.tipoJornada
      from dbo.ControlHorario c  
      INNER JOIN dbo.Jornada j ON c.uuidJornada  = j.uuid
      INNER JOIN dbo.Empleado e ON c.uuidEmpleado = e.uuid`,
      getAllPagos: 'select * from PAGOS',
      getAllDetallePagos:`SELECT 
      DP.uuid, 
      DP.Bonificacion,
      P.HorasTotales,
      P.LimiteOrdinaria,
      E.primerNombre,
      E.segundoNombre,
      E.primerApellido,
      E.segundoApellido
      from [dbo].[DETALLE _PAGOS] DP
      INNER JOIN dbo.PAGOS P ON DP.uuidPagos  = P.uuid
      INNER JOIN dbo.Empleado E ON DP.uuidEmpleado = E.uuid`,
      getAllBitacore: 'select * from Bitacora'
      }
} 