class List < ApplicationRecord
    belongs_to :user 
    belongs_to :category
    has_and_belongs_to_many :nominations

    accepts_nested_attributes_for :category, :nominations

    def category_attributes=(category_attributes)
        category = Category.find_or_create_by(category_attributes)
        self.category= category
    end

    def nomination_attributes=(nomination_attributes)
        nomination = Nomination.find_or_create_by(nomination_attributes)
    end
end
