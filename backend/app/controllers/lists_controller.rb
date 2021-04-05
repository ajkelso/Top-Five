class ListsController < ApplicationController

    def create

        category = Category.find_or_create_by(title: params[:category])
        new_list = List.create(user_id: current_user.id, category_id: category.id)
        byebug
        new_list.first = Nomination.find_or_create_by(name: params["first"], category_id: category.id).id
        new_list.second = Nomination.find_or_create_by(name: params["second"], category_id: category.id).id
        new_list.third = Nomination.find_or_create_by(name: params["third"], category_id: category.id).id
        new_list.fourth = Nomination.find_or_create_by(name: params["fourth"], category_id: category.id).id
        new_list.fifth = Nomination.find_or_create_by(name: params["fifth"], category_id: category.id).id

        render json: new_list

    end

    # private

    # def list_params
    #     params.permit(:user_id, :category_id, :category, :first, :second, :third, :fourth, :fifth)
    # end



end
