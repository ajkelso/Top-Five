class AddVotesToNominations < ActiveRecord::Migration[6.0]
  def change
    add_column :nominations, :votes, :integer, default: 0
  end
end
