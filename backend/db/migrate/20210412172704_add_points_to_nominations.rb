class AddPointsToNominations < ActiveRecord::Migration[6.0]
  def change
    add_column :nominations, :points, :integer
  end
end
