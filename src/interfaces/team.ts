export default interface Team {
  id: number;
  attributes: {
    name: string;
    role:string;
    description: string;
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
  };
}
