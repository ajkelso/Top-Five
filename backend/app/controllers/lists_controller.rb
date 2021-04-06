class ListsController < ApplicationController

    def create
        # REFACTOR!!!
        category = Category.find_or_create_by(title: params[:category])
        new_list = List.create(user_id: current_user.id, category_id: category.id)
        first = Nomination.find_or_create_by(name: params["first"], category_id: category.id)
        second = Nomination.find_or_create_by(name: params["second"], category_id: category.id)
        third = Nomination.find_or_create_by(name: params["third"], category_id: category.id)
        fourth = Nomination.find_or_create_by(name: params["fourth"], category_id: category.id)
        fifth = Nomination.find_or_create_by(name: params["fifth"], category_id: category.id)
        new_list.update(first: first.id, second: second.id, third: third.id, fourth: fourth.id, fifth:fifth.id)  

        byebug
        render json: new_list

    end

    # private

    # def list_params
    #     params.permit(:user_id, :category_id, :category, :first, :second, :third, :fourth, :fifth)
    # end



end
