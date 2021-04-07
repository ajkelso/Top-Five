class Nomination < ApplicationRecord
    belongs_to :category
    has_and_belongs_to_many :lists

    scope :filter_by_category, -> (category_id) {where category_id: category_id}
    scope :desc_order, -> { order(votes: :desc) } 

end
