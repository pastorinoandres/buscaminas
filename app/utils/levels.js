
//Niveles seteados por defecto

export default levels = [
    {
      name:'PRINCIPIANTE',
      filas:8,
      columnas:8,
      minas:10,
      imagen:require('../../assets/caratula_amarilla.png')
    },
    {
      name:'INTERMEDIO',
      filas:16,
      columnas:16,
      minas:40,
      imagen:require('../../assets/caratula_roja.png')
    },
    {
      name:'EXPERTO',
      filas:16,
      columnas:30,
      minas:99,
      imagen:require('../../assets/caratula_fucsia.png')
    },
    {
      name:'PERSONALIZADO',
      filas:8,
      columnas:8,
      minas:10,
      imagen:require('../../assets/caratula_verde.png')
    }
  ]