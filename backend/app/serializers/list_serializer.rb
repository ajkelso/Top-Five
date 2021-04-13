class ListSerializer < ActiveModel::Serializer
  attributes :list_data

  def list_data
    {
      id: object.id,
      category: Category.find(object.category_id).title,
      first: object.nominations[0].name,
      second: object.nominations[1].name,
      third: object.nominations[2].name,
      fourth: object.nominations[3].name,
      fifth: object.nominations[4].name
    }
  end
end
