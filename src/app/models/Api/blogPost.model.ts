export default interface blogPost {
  post_name: string;
  post_content: string;
  meta_data_title: string;
  meta_data_description: string;
  post_url: string;
  post_author: string;
  post_tags: string[];
  publication_date: Date;
  keywords: string;
  img?: string;
}
