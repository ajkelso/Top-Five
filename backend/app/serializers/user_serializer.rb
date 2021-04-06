class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :lists 

  def lists
    object.lists.map {|l| ListSerializer.new(l)}
  end
end
