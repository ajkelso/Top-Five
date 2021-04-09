class CategoriesSerializer < ActiveModel::Serializer
  attributes :id, :title, :top_ten

  def top_ten
    Nomination.filter_by_category(object.id).desc_order.limit(10)
  end

  def title
    object.title.capitalize()
  end

end
