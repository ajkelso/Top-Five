class ListSerializer < ActiveModel::Serializer
  attributes :id, :top_five

  def top_five
    {
      category: Category.find(object.category_id).title,
      first: Nomination.find(object.first).name,
      second: Nomination.find(object.second).name,
      third: Nomination.find(object.third).name,
      fourth: Nomination.find(object.fourth).name,
      fifth: Nomination.find(object.fifth).name
    }
  end
end
