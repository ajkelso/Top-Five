class Category < ApplicationRecord
    has_many :nominations
    has_many :lists
end
