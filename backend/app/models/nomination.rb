class Nomination < ApplicationRecord
    belongs_to :category
    has_and_belongs_to_many :lists
end
