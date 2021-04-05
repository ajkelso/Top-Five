# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding..."

List.destroy_all
User.destroy_all

u1 = User.create(username: 'Andy', password: 'andy', email: 'a@a.com')
u2 = User.create(username: 'Joe', password: 'joe', email: 'j@j.com')
u3 = User.create(username: 'Preston', password: 'preston', email: 'p@p.com')

c1 = Category.create(title: 'Bands')
c2 = Category.create(title: 'Movies')
c3 = Category.create(title: 'Foods')


n1 = Nomination.create(name: 'Radiohead', category_id: 1)
n2 = Nomination.create(name: 'Led Zeppelin', category_id: 1)
n3 = Nomination.create(name: 'Grizzly Bear', category_id: 1)
n4 = Nomination.create(name: 'The Beatles', category_id: 1)
n5 = Nomination.create(name: 'Arcade Fire', category_id: 1)
n6 = Nomination.create(name: 'Shawshank Redemption', category_id: 2)
n7 = Nomination.create(name: 'Frozen', category_id: 2)
n8 = Nomination.create(name: 'Big', category_id: 2)
n9 = Nomination.create(name: 'Small', category_id: 2)
n10 = Nomination.create(name: 'Palm Springs', category_id: 2)
n12 = Nomination.create(name: 'French Fries', category_id: 2)
n13 = Nomination.create(name: 'Burgers', category_id: 2)
n14 = Nomination.create(name: 'Pizza', category_id: 2)
n15 = Nomination.create(name: 'Pasta', category_id: 2)
n11 = Nomination.create(name: 'Sushi', category_id: 2)

l1 = List.create(user_id: u1.id, category_id: c1.id, first: n1, second: n2, third: n3, fourth: n4, fifth: n5)
l2 = List.create(user_id: u1.id, category_id: c2.id, first: n10, second: n6, third: n7, fourth: n8, fifth: n9)
l3 = List.create(user_id: u2.id, category_id: c1.id, first: n5, second: n4, third: n3, fourth: n2, fifth: n1)
l4 = List.create(user_id: u3.id, category_id: c3.id, first: n11, second: n12, third: n13, fourth: n14, fifth: n15)

puts "Seeding complete!"