class Nomination < ApplicationRecord
    belongs_to :category
    has_many :lists_nominations
    has_many :lists, through: :list_nominations

    scope :filter_by_category, -> (category_id) {where category_id: category_id}
    scope :desc_order, -> { order(points: :desc) } 

end
