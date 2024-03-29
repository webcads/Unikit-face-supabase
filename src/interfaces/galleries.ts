export default interface Galleries {
  galleries: {
    data: Array<{
      id: number;
      attributes: {
        title: string;
        ph: string;
        category: string;
        image: {
          data: {
            id: number;
            attributes: {
              name: string;
              alternativeText: string | null;
              caption: string | null;
              width: number;
              height: number;
              formats: {
                large: {
                  ext: string;
                  url: string;
                  // Otras propiedades necesarias
                };
                // Puedes agregar formatos adicionales si es necesario
              };         
            };
          };
        };
      };
    }> | null;
  }; 
};