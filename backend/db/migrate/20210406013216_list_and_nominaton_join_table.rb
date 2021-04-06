class ListAndNominatonJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_table :lists_nominations, id: false do |t|
      t.belongs_to :list
      t.belongs_to :nomination
    end
  end
end
