class ListsController < ApplicationController

    def create
        # REFACTOR!!!
        category = Category.find_or_create_by(title: params[:category].strip.downcase)
        new_list = List.create!(user_id: current_user.id, category_id: category.id)
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

    def update 
        
        list = List.find_by(id: params[:id])
        
        if list 
            # change points for old noms
            pts = 5
            list.nominations.each do |n| 
                n.increment!(:points, -pts)
                pts -= 1
            end
            #find or create new noms
            first = Nomination.find_or_create_by(name: params["first"], category_id: list.category_id)
            second = Nomination.find_or_create_by(name: params["second"], category_id: list.category_id)
            third = Nomination.find_or_create_by(name: params["third"], category_id: list.category_id)
            fourth = Nomination.find_or_create_by(name: params["fourth"], category_id: list.category_id)
            fifth = Nomination.find_or_create_by(name: params["fifth"], category_id: list.category_id)
            
            newNoms = [first, second, third, fourth, fifth]
            new_pts = 5
            list.lists_nominations.zip(newNoms).each  do |record, nom| 
                record.update(nomination_id: nom.id) 
                nom.increment!(:points, new_pts)
                new_pts -= 1
            end

            render json: {message: "List updated!"}
        else
            render json: {error: "List failed to update"}
        end
    end

    def destroy
        
        list = List.find_by(id: params[:id])
        list.nominations[0].increment!(:points, -5)
        list.nominations[1].increment!(:points, -4)
        list.nominations[2].increment!(:points, -3)
        list.nominations[3].increment!(:points, -2)
        list.nominations[4].increment!(:points, -1)
        list.destroy

        render json: { list_id: list.id, message: "List successfully deleted!" }
    
    end


    # private

    # def list_params
    #     params.permit(:first, :second, :third, :fourth, :fifth)
    # end



end
