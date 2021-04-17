class CategoriesController < ApplicationController

    def index
        @categories = Category.all 
        render json: {categories: @categories, each_serializer: CategoriesSerializer}
    end
end
