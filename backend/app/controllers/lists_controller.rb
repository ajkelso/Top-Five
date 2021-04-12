class ListsController < ApplicationController

    def create
        # REFACTOR!!!
        category = Category.find_or_create_by(title: params[:category].strip.downcase)
        new_list = List.create(user_id: current_user.id, category_id: category.id)
        first = Nomination.find_or_create_by(name: params["first"], category_id: category.id)
        second = Nomination.find_or_create_by(name: params["second"], category_id: category.id)
        third = Nomination.find_or_create_by(name: params["third"], category_id: category.id)
        fourth = Nomination.find_or_create_by(name: params["fourth"], category_id: category.id)
        fifth = Nomination.find_or_create_by(name: params["fifth"], category_id: category.id)
        
        first.increment!(:points, 5)
        second.increment!(:points, 4)
        third.increment!(:points, 3)
        fourth.increment!(:points, 2)
        fifth.increment!(:points, 1)
        
        new_list.lists_nominations.create([
            {nomination_id: first.id, rank: 1}, 
            {nomination_id: second.id, rank: 2}, 
            {nomination_id: third.id, rank: 3}, 
            {nomination_id: fourth.id, rank: 4}, 
            {nomination_id: fifth.id, rank: 5}
        ])  
        
        render json: new_list

    end

    def destroy
        
        list = List.find_by(id: params[:id])
        list.nominations[0].increment!(:points, -5)
        list.nominations[1].increment!(:points, -4)
        list.nominations[2].increment!(:points, -3)
        list.nominations[3].increment!(:points, -2)
        list.nominations[4].increment!(:points, -1)
        list.delete
    
    end


    # private

    # def list_params
    #     params.permit(:user_id, :category_id, :category, :first, :second, :third, :fourth, :fifth)
    # end



end
