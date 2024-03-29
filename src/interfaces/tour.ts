export default interface Tour {
  id: number;
  attributes: {
    title: string;
    description: string;
    region: string;
    slug: string;
    date_departure: string;
    all_year: string;
    price: string;  
    price_visible: string;
    new: string;
    discount: string;
    discount_visible: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          url: string;
          // Add other necessary image properties here
        };
      } | null;
    };
    days: {
      data: {
        id: number;
        attributes: {
          number: number;
          title: string;
          description: string;        
        };
      } | null;
    };
    inventario: {
      data: {
        id: number;
        attributes: {
          duration: number;
          group_size: number;
          single_supplement: number;
          incluide: string;
          not_include: string;   
        };
      } | null;
    };   
    pax_and_prices: {
      data: {
        id: number;
        attributes: {
          pax_description: string;
          price: number;                              
        };
      } | null;
    };  
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
  }
}

