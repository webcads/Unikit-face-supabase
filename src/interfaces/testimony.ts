export default interface Testimony {
  id: number;
  attributes: {
    title: string;
    description: string;
    name: string;    
    profession: string;
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
  };
}
