class LoadDevPost < SiteBuilder
  def build
    hook :site, :post_read do
      site.data["devto_posts"].each do |post|
        doc "blog/#{post.slug}.html" do
          collection "posts"
          front_matter post
          content post[:body_markdown]
          layout "post"
          title post[:title]
          date(post[:published_at] || Date.today)
          categories ["blog"]
          tags post["tag_list"]
        end
      end
    end
  end
end
